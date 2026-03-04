import React from 'react'
import TitleText from '../ui/TitleText'
import { PenTool } from 'lucide-react'

export default function MySnippets() {
    return (
        <div>
            <TitleText title="Recent Projects" icon={PenTool} />
        </div>
    )
}
