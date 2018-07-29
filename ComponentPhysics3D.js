class ComponentPhysics3D {
    /*
    @param: active Boolean
    */
    setActive(active) {}

    /*
    @param: created Boolean
    */
    setCreated(created) {}

    /*
    @return: String
    */
    type() {}

    /*
    @params: x number
    @params: y number
    @params: z number
    */
    setLinearVelocity(x, y, z) {}

    /*
    @returns: Object
    */
    linearVelocity() {}

    /*
    @params: x number
    @params: y number
    @params: z number
    */
    setAngularVelocity(x, y, z) {}

    /*
    @returns: Object
    */    
    angularVelocity() {}

    rebuildShape() {}
}