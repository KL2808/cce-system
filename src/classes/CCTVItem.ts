import { to_number } from 'svelte/internal';
import { v4 as uuidv4 } from 'uuid';
import { Camera } from './Camera';
import { Codec } from './Codec';

export class CCTVItem {
    readonly uuid: string;
    camrea: Camera;
    codec: Codec;
    fps: number;
    recHoursPerDay: number;
    recDays: number;
    quantity: number;
    capacityTB: number;

    constructor() {
        this.uuid = uuidv4();
        this.camrea = new Camera(0, 0, 0);
        this.codec = new Codec("-", 0);
        this.fps = 24;
        this.recHoursPerDay = 24;
        this.recDays = 1;
        this.quantity = 1;
        this.capacityTB  = 0;
        console.info(`New CCTVItem added to the list\nUUID: ${this.uuid}`);
    }

    updateUsage() {
        try {
            const recordingSecs = (this.recHoursPerDay * this.recDays) * (60**2);
            const SecMB = this.camrea.framesizeMB * recordingSecs * this.fps * this.codec.compressionFactor;
            const terabytes = ((SecMB / (10**6))) * this.quantity;
            this.capacityTB = to_number(terabytes.toFixed(3));
        } catch (error) {
            console.error(error);
        }
    }
}