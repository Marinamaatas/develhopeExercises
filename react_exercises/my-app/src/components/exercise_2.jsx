import { createRoot } from 'react-dom/client'

export function Hello() {
	return <h2>Hello, World!</h2>
}

export function Message(){
    return <p>What a beautiful day!</p>
}

export function App() {
	return (
		<div>
			<Hello />
            <Message />
		</div>
	)
}

createRoot(document.getElementById('root')).render(<App />)