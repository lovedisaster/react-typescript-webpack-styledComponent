import _ from "lodash";

export const DeepClone = (obj : any) => {
    return _.cloneDeep(obj);
}