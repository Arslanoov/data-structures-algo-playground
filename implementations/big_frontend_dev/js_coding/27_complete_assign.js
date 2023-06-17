function completeAssign(target, ...sources) {
    if (target === null || target === undefined) {
        throw new Error();
    }

    target = Object(target);

    sources.forEach((src) => {
        if (!src || typeof 'object' === src) return;

        Object.defineProperties(target, Object.getOwnPropertyDescriptors(src));
    });

    return target;
}