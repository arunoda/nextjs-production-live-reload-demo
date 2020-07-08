import useSWR from 'swr'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'

async function textFetcher(path) {
    const res = await fetch(path)
    return res.text()
}

export default function useLiveReload() {
    const router = useRouter()
    const [prevData, setPrevData] = useState(null)
    const {data} = useSWR(router.asPath, textFetcher, {
        refreshInterval: 1000,
    })

    useEffect(() => {
        if (!data) {
            return
        }

        if (prevData && prevData !== data) {
            location.reload()
            return
        }

        setPrevData(data)
    })

    return {}
}