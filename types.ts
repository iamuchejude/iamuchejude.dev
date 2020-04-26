type SerializedStyles = {

};

interface ElementNode<
  Def extends ElementNodeDef
  > {
  type: "element";
  component: string;
  props: Def["props"];
  children: Def extends { children: (infer T)[] } ? ResolveNode<T>[] : null;
  parent: Def extends { parent: any } ? ResolveNode<Def["parent"]> : any;
  ignore?: boolean;
}

type ElementNodeDef<Props = {}> = {
  type: "element",
  component?: "string",
  props?: Props,
  children?: (ElementNodeDef | TextNodeDef)[];
  parent?: ElementNodeDef;
};

interface TextNode<
  Def extends TextNodeDef
  > {
  type: "text" | "comment";
  content: string;
  parent: Def extends { parent: any } ? ResolveNode<Def["parent"]> : any;
  ignore?: boolean;
}

type TextNodeDef = {
  type: "text" | "comment";
  parent?: ElementNodeDef;
}

type ResolveNode<NodeDef> =
  NodeDef extends ElementNodeDef
  ? ElementNode<ElementNodeDef>
  : NodeDef extends TextNodeDef
  ? TextNode<NodeDef>
  : never;

let node = {} as ResolveNode<{
  type: "comment"
  parent: {
    type: "element";
    props: {
      "data-src": string;
    }
  }
}>;

node.type
node.parent.props["data-src"]