import Counter from "./Counter.tsx";

const DefaultCounter = () => {
    return (
        <div>
            <section>
                <Counter initialValue={0}>
                    {({count, increment, decrement, reset}) => (
                        <div>
                            <p>Count: {count}</p>
                            <div>
                                <button onClick={increment}>
                                    +1
                                </button>
                                <button onClick={decrement}>
                                    -1
                                </button>
                                <button onClick={reset}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}
                </Counter>
            </section>
        </div>
    )
}

export default DefaultCounter;