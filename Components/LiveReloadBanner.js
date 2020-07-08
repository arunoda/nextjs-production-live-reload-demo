import useLiveReload from "../lib/use-live-reload"

export default function LiveReloadBanner() {
    const { needToReload } = useLiveReload()
    
    if (needToReload) {
        return (
            <div>
                There's a new version of this page.
                <button onClick={() => location.reload()}>Reload Now</button>
                <style jsx>{`
                    div {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        padding: 10px;
                        background-color: #F48FB1;
                        text-align: center;
                    }
                    div button {
                        margin-left: 10px;
                    }          
                `}</style>
            </div>
        )
    }

    return null
}