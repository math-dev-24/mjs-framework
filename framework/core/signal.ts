class Signal<T> {
    private _value: T;

    constructor(init_value: T) {
        this._value = init_value;
    }

    get value(): T {
        return this._value;
    }

    public set_value(new_value: T): void {
        if (new_value !== this._value) {
            this._value = new_value;
        }
    }
}

type useSignalType<T> = [T, (value: T) => void];

export function useSignal<T>(init_value: T): useSignalType<T> {
    const signal = new Signal(init_value);

    return [signal.value, signal.set_value.bind(signal)];
}
