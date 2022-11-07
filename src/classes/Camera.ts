export class Camera {
    readonly pixelsVertical: number;
    readonly pixelsHorizontal: number;
    readonly pixelDepthBit: number;
    readonly framesizeMB: number;

    constructor(pixelsVertical: number, pixelsHorizontal: number, pixelDepthBit: number, framesizeMB?: number) {
        this.pixelsVertical = pixelsVertical;
        this.pixelsHorizontal = pixelsHorizontal;
        this.pixelDepthBit = pixelDepthBit;
        if(framesizeMB) this.framesizeMB = framesizeMB;
        else this.framesizeMB = this.calculateSizeInMB();

    }

    private calculateSizeInMB(): number {
        // Pixels * Bit Depth ÷ 8 ÷ 1024 ÷ 1024 = Megabyte
        return (this.pixelsVertical * this.pixelsHorizontal) * this.pixelDepthBit / 8 / 1024 / 1024;
    }
}