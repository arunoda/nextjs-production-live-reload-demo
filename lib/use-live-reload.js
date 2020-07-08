import SWR from 'swr'
import { useEffect, useState } from 'react'

async function textFetcher(path) {
    const res = await fetch(path)
    return res.text()
}

export default function useLiveReload() {
    const [needToReload, setNeedToReload] = useState(false)
    const [prevData, setPrevData] = useState(null)
    const {data} = SWR('/', textFetcher, {
        refreshInterval: 1000,
    })

    useEffect(() => {
        if (needToReload) {
            return
        }

        if (!data) {
            return
        }

        if (prevData && prevData !== data) {
            setNeedToReload(true)
            return
        }

        setPrevData(data)
    })

    return {
        needToReload
    }
}