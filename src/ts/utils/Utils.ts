import _ from "lodash";

export function DeepClone<T> (obj : T) : T {
    return _.cloneDeep(obj);
}