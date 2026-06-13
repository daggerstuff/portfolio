/// <reference types="astro/client" />

declare module '*.svg?url' {
    const content: string;
    export default content;
}
