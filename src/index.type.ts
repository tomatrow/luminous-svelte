export interface GalleryActionConfig {
    selector?: string
    options?(
        instance: () => LuminousGallery
    ): { galleryOptions?: GalleryOptions; luminousOptions?: LuminousOptions }
}

export interface LuminousOptions {
    // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-lightbox`. Default `lum-`
    // prefixed classes will always be added as well.
    namespace?: string
    // Which attribute to pull the lightbox image source from.
    sourceAttribute?: string
    // Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
    caption?: string | ((trigger: Element) => string)
    // The event to listen to on the _trigger_ element: triggers opening.
    openTrigger?: string
    // The event to listen to on the _lightbox_ element: triggers closing.
    closeTrigger?: string
    // Allow closing by pressing escape.
    closeWithEscape?: boolean
    // Automatically close when the page is scrolled.
    closeOnScroll?: boolean
    // Disable close button
    showCloseButton?: boolean
    // A node to append the lightbox element to.
    appendToNode?: Element
    // A selector defining what to append the lightbox element to.
    // This will take precedence over `appendToNode`.
    appendToSelector?: string
    // If present (and a function), this will be called
    // whenever the lightbox is opened.
    onOpen?: Function
    // If present (and a function), this will be called
    // whenever the lightbox is closed.
    onClose?: Function
    // When true, adds the `imgix-fluid` class to the `img`
    // inside the lightbox. See https://github.com/imgix/imgix.js
    // for more information.
    includeImgixJSClass?: boolean
    // Add base styles to the page. See the "Theming"
    // section of README.md for more information.
    injectBaseStyles?: boolean
}

export interface GalleryOptions {
    // Whether pressing the arrow keys should move to the next/previous slide.
    arrowNavigation?: boolean
}

export interface LuminousGallery {
    new (
        triggers: Element[],
        options: GalleryOptions,
        luminousOpts: LuminousOptions
    ): LuminousGallery
    destroy(): void
    triggers: Element[]
    luminousInstances: Luminous[]
}

export interface Lightbox {
    currentTrigger: Element
    _updateImgSrc(): void
    _updateCaption(): void
    _sizeImgWrapperEl(): void
}

export interface Luminous {
    new (trigger: Element, options: LuminousOptions): Luminous
    open(e: Event): void
    close(e: Event): void
    destroy(): void

    isOpen: boolean
    lightbox: Lightbox
    settings: LuminousOptions
}
