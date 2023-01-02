type id = "ready";
type type = "event";

export default interface Block {
    id: id
    type: type
    value: null | any
    link: null | Block[]
    parameter: {[k: string]: any}
    innerBlocks: Block[]
};