import Markdown from 'markdown-to-jsx'
import { promises as fsPromises } from 'fs'
import path from 'path'
import useLiveReload from '../lib/use-live-reload'

export default function Index({content}) {    
    useLiveReload()
    return (
        <div className="container">
            <Markdown>
                {content}
            </Markdown>
            <style jsx>{`
                .container {
                    font-family: Arial;
                    margin: 60px 10px;
                }
            `}</style>
        </div>
    )
}

export async function getStaticProps() {
    const contentPath = path.resolve('.', 'data', 'content.md')
    const content = await fsPromises.readFile(contentPath, 'utf8')

    return {
        props: {
            content
        },
        unstable_revalidate: 1
    }
}