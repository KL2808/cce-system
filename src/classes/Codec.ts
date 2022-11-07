export class Codec {
    readonly name: string;
    readonly compressionFactor: number;

    constructor(name: string, compressionFactor: number) {
        this.name = name;
        this.compressionFactor = compressionFactor;
    }
}