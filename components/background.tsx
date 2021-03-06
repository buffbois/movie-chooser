import styles from '../styles/Background.module.css'

export default function Background({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-to-b from-purple-300 to-purple-100 min-h-screen py-20">
            {children}
        </div>
    )
}