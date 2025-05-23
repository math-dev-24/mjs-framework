type SignalListener = () => void;

export class Signal<T>{
    private _value: T;
    private listeners: Set<SignalListener> = new Set();
    private elements: Set<HTMLElement> = new Set();

    constructor(value: T) {
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        if (this._value !== value) {
            this._value = value;
            this.notify();
        }
    }

    subscribe(listener: SignalListener): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    bindElement(element: HTMLElement): void {
        this.elements.add(element);
    }


    unbindElement(element: HTMLElement): void {
        this.elements.delete(element);
    }

    private notify() {
        this.listeners.forEach(listener => listener());
        this.updateElements();
    }

    private updateElements(): void {
        this.elements.forEach(element => {
            if (element.textContent !== String(this._value)) {
                element.textContent = String(this._value);
            }
        });
    }

    // Méthode pour nettoyer les références
    cleanup(): void {
        this.listeners.clear();
        this.elements.clear();
    }
}

export function createSignal<T>(value: T): Signal<T> {
    return new Signal(value);
}