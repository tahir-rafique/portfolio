// components/IconComponent.tsx
import { IconTypes } from '@/types'

export default function IconComponent(
    {
        iconName: CustomIcon,
        className = '',
        onClick
    }
        : IconTypes) {
    return (
        <CustomIcon
            className={`size-5 ${className}`}
            onClick={onClick}
        />
    )
}