import React, { useEffect, useState } from 'react';


class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo)
    }
    render() {
        if ((this.state as any).hasError) {
            return (this.props as any).fallback
        }
        return this.props.children;
    }
}

const Component = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        if (count === 2) {
            throw 'error'
        }
    }, [count])

    return <button onClick={() => setCount(count + 1)}>edew</button>
}

const App = () => {
    return (
        <div>
            <ErrorBoundary fallback={'oops some error'}>
                <Component />
            </ErrorBoundary>
        </div>
    )
}

export default App
