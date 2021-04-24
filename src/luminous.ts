//@ts-ignore
import { LuminousGallery } from "luminous-lightbox"
import type { GalleryActionConfig } from "./index.type"

export function gallery(node: HTMLElement, config: GalleryActionConfig = { selector: "a" }) {
    let instance: LuminousGallery

    function destroy() {
        instance?.destroy()
    }

    function update(newConfig: GalleryActionConfig) {
        destroy()
        const options = newConfig.options?.(() => instance)
        instance = new LuminousGallery(
            Array.from(node.querySelectorAll(newConfig.selector!)),
            options?.galleryOptions ?? {},
            options?.luminousOptions ?? {}
        )
    }

    update(config)

    return {
        update,
        destroy
    }
}
