class Entity {
    /*
    @param: name
    */
    component(name) {}

    /*
    @returns: ComponentPhysics3D or null
    */
    physics() {}

    /*
    @return: Vector3d
    */
    position() {}

    /*
    @return: Vector3d
    */
    worldPosition() {}

    /*
    @return: Vector3d
    */
    rotation() {}

    rotationQuat() {}

    transform() {}

    remove() {}

    /*
    @param: callback Function
    */
    addRemoveCallback(callback) {}

    /*
    @param: name
    */
    setTexture(name) {}

    /*
    @param: r number
    @param: g number
    @param: b number
    */
    setColor(r, g, b) {}

    /*
    @param: x number
    @param: y number
    @param: z number
    */
    setPosition(x, y, z) {

    }

    /*
    @param: x number
    @param: y number
    @param: z number
    */
    setRotation(x, y, z) {}

    /*
    @param: quaternion Quaternion
    */
    setRotationQuat(quaternion) {}

    /*
    @param: x number
    @param: y number
    @param: z number
    */
    setScale(x, y, z) {}

    /*
    @return: Vector3d
    */
    scale() {}

    linkedEntities() {}

    children() {}

    /*
    @param: child
    */
    addChild(child) {}

    /*
    @param: animate Boolean
    */
    setAnimate(animated) {}

    find() {}

    /*
    @return: String
    */
    name() {}
}