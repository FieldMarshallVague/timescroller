// Type definitions for jsPlumb 2.2.4
// Ron Newcomb

declare var jsPlumb: JsPlumbInstance;

export type Selector = string;
export type UUID = string;

export interface JsPlumbInstance {
  addEndpoint(
    el: string | Object | Array<any>,
    params?: Object,
    referenceParams?: Object
  ): Object | Array<any>;
  addEndpoints(
    target: string | Object | Array<any>,
    endpoints: Array<any>,
    referenceParams?: Object
  ): Array<any>;
  animate(
    el: string | Element | Selector,
    properties?: Object,
    options?: Object
  ): void;
  batch(fn: Function, doNotRepaintAfterwards?: boolean /* =false */): void;
  bind(
    event: 'connection',
    callback: (info: ConnectionMadeEventInfo, originalEvent: Event) => void,
    insertAtStart?: boolean /* =false */
  ): void;
  bind(
    event: 'click',
    callback: (info: Connection, originalEvent: Event) => void,
    insertAtStart?: boolean /* =false */
  ): void;
  bind(
    event: string,
    callback: (info: OnConnectionBindInfo, originalEvent: Event) => void,
    insertAtStart?: boolean /* =false */
  ): void;
  cleanupListeners(): void;
  connect(params: ConnectParams, referenceParams?: Object): Connection;
  deleteEndpoint(
    object: UUID | Endpoint,
    doNotRepaintAfterwards?: boolean /* =false */
  ): JsPlumbInstance;
  deleteEveryEndpoint(): JsPlumbInstance;
  deleteConnection(conn: Connection): void;
  doWhileSuspended(): JsPlumbInstance;
  draggable(el: Object, options?: DragOptions): JsPlumbInstance;
  empty(el: string | Element | Selector): void;
  fire(event: string, value: Object, originalEvent?: Event): void;
  getAllConnections(): Object;
  getConnections(
    scope: string,
    options: Object,
    scope2?: string | string,
    source?: string | string | Selector,
    target?: string | string | Selector,
    flat?: boolean /* =false */
  ): Array<any> | Map<any, any>;
  getContainer(): Element;
  getDefaultScope(): string;
  getElement(el: any): any;
  getEndpoint(uuid: string): Endpoint;
  getId(element: any, uuid?: string, doNotCreateIfNotFound?: Boolean): string;
  getInstance(_defaults?: Object): JsPlumbInstance;
  getScope(Element: Element | string): string;
  getSelector(context?: Element | Selector, spec?: string): any[];
  getSourceScope(Element: Element | string): string;
  getTargetScope(Element: Element | string): string;
  getType(id: string, typeDescriptor: string): Object;
  hide(
    el: string | Element | Selector,
    changeEndpoints?: boolean /* =false */
  ): JsPlumbInstance;
  importDefaults(defaults: Object): JsPlumbInstance;
  isHoverSuspended(): boolean;
  isSource(el: string | Element | Selector): boolean;
  isSourceEnabled(
    el: string | Element | Selector,
    connectionType?: string
  ): boolean;
  isSuspendDrawing(): boolean;
  isSuspendEvents(): boolean;
  isTarget(el: string | Element | Selector): boolean;
  isTargetEnabled(el: string | Element | Selector): boolean;
  makeSource(
    el: string | Element | Selector,
    params: Object,
    endpoint?: string | Array<any>,
    parent?: string | Element,
    scope?: string,
    dragOptions?: Object,
    deleteEndpointsOnEmpty?: boolean /* =false */,
    filter?: Function
  ): void;
  makeTarget(
    el: string | Element | Selector,
    params: Object,
    endpoint?: string | Array<any>,
    scope?: string,
    dropOptions?: Object,
    deleteEndpointsOnEmpty?: boolean /* =true */,
    maxConnections?: number /* =-1 */,
    onMaxConnections?: Function
  ): void;
  off(
    el: Element | Element | string,
    event: string,
    fn: Function
  ): JsPlumbInstance;
  on(
    el: Element | Element | string,
    children?: string,
    event?: string,
    fn?: Function
  ): JsPlumbInstance;
  ready(fn: Function): void;
  recalculateOffsets(el: string | Element | Selector): void;
  registerConnectionType(typeId: string, type: Object): void;
  registerConnectionTypes(types: Object): void;
  registerEndpointType(typeId: string, type: Object): void;
  registerEndpointTypes(types: Object): void;
  remove(el: string | Element | Selector): void;
  removeAllEndpoints(
    el: string | Element | Selector,
    recurse?: boolean /* =false */
  ): JsPlumbInstance;
  repaint(el: string | Element | Selector): JsPlumbInstance;
  repaintEverything(clearEdits?: boolean /* =false */): JsPlumbInstance;
  reset(): void;
  restoreDefaults(): JsPlumbInstance;
  revalidate(el: string | Element | Selector): void;
  select(
    params?: Object,
    scope?: string | string,
    source?: string | string,
    target?: string | string,
    connections?: Connection[]
  ): { each(fn: (conn: Connection) => void): void };
  getHoverPaintStyle(
    params?: Object,
    scope?: string | string /* =jsPlumb.DefaultScope */,
    source?: string | Element | Selector | Array<any>,
    target?: string | Element | Selector | Array<any>,
    element?: string | Element | Selector | Array<any>
  ): Selection;
  setHover(container: string | Element | Selector): void;
  setDefaultScope(scope: string): JsPlumbInstance;
  setDraggable(el: string | Object | Array<any>, draggable: boolean): void;
  setHoverSuspended(hover: boolean): void;
  setIdChanged(oldId: string, newId: string): void;
  setParent(
    el: Selector | Element,
    newParent: Selector | Element | string
  ): void;
  setScope(el: Element | string, scope: string): void;
  setSource(
    connection: Connection,
    source: string | Element | Endpoint,
    doNotRepaint?: boolean /* =false */
  ): JsPlumbInstance;
  setSourceEnabled(
    el: string | Element | Selector,
    state: boolean
  ): JsPlumbInstance;
  setSourceScope(
    el: Element | string,
    scope: string,
    connectionType?: string
  ): void;
  setSuspendDrawing(
    val: boolean,
    repaintAfterwards?: boolean /* =false */
  ): boolean;
  setSuspendEvents(val: boolean): void;
  setTarget(
    connection: Connection,
    target: string | Element | Endpoint,
    doNotRepaint?: boolean /* =false */
  ): JsPlumbInstance;
  setTargetEnabled(
    el: string | Element | Selector,
    state: boolean
  ): JsPlumbInstance;
  setTargetScope(
    el: Element | string,
    scope: string,
    connectionType?: string
  ): void;
  show(
    el: string | Element | Selector,
    changeEndpoints?: boolean /* =false */
  ): JsPlumbInstance;
  toggleDraggable(el: string | Element | Selector): boolean;
  toggleSourceEnabled(el: string | Element | Selector): boolean;
  toggleTargetEnabled(el: string | Element | Selector): boolean;
  toggleVisible(
    el: string | Element | Selector,
    changeEndpoints?: boolean /* =false */
  ): void;
  unbind(eventOrListener?: string | Function, listener?: Function): void;
  unmakeEverySource(): JsPlumbInstance;
  unmakeEveryTarget(): JsPlumbInstance;
  unmakeSource(el: string | Element | Selector): JsPlumbInstance;
  unmakeTarget(el: string | Element | Selector): JsPlumbInstance;
}

export interface ConnectionMadeEventInfo {
  connection: Connection;
  source: HTMLDivElement;
  sourceEndpoint: Endpoint;
  sourceId: string;
  target: HTMLDivElement;
  targetEndpoint: Endpoint;
  targetId: string;
}

export interface OnConnectionBindInfo {
  connection: Connection; // the new Connection.you can register listeners on this etc.
  sourceId: number; // - id of the source element in the Connection
  originalSourceId: number;
  newSourceId: number;
  targetId: number; // - id of the target element in the Connection
  originalTargetId: number;
  newTargetId: number;
  source: Element; // - the source element in the Connection
  target: Element; // - the target element in the Connection
  sourceEndpoint: Endpoint; // - the source Endpoint in the Connection
  newSourceEndpoint: Endpoint;
  targetEndpoint: Endpoint; // - the targetEndpoint in the Connection
  newTargetEndpoint: Endpoint;
}

export interface Defaults {
  Anchor: any[];
  Anchors: any[][];
  ConnectionsDetachable: boolean;
  ConnectionOverlays: any[];
  Connector: any[];
  Container: any; // string(selector or id) or element
  DoNotThrowErrors: boolean;
  DragOptions: DragOptions;
  DropOptions: DropOptions;
  Endpoint: any[];
  Endpoints: any[];
  EndpointStyle: object;
  EndpointStyles: any[];
  EndpointHoverStyle: object;
  EndpointHoverStyles: any[];
  HoverPaintStyle: PaintStyle;
  LogEnabled: boolean;
  Overlays: any[];
  MaxConnections: number;
  PaintStyle: PaintStyle;
  ReattachConnections: boolean;
  RenderMode: string;
  Scope: string;
}

export interface PaintStyle {
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  outlineStroke: string;
  outlineWidth: number;
}

export interface ArrowOverlay {
  width?: number; // 20
  length?: number; // 20
  location?: number; // 0.5
  direction?: number; // 1
  foldback?: number; // 0.623
  paintStyle?: PaintStyle;
}

export interface LabelOverlay {
  label: string;
  cssClass?: string;
  location?: number; // 0.5
  labelStyle?: {
    font?: string;
    color?: string;
    fill?: string;
    borderStyle?: string;
    borderWidth?: number; // integer
    padding?: number; // integer
  };
}

export interface Connections {
  length: number;
  detach(): void;
  each(e: (c: Connection) => void): void;
}

export interface ConnectParams {
  uuids?: any[];
  source?: any; // string, element or endpoint
  target?: any; // string, element or endpoint
  detachable?: boolean;
  deleteEndpointsOnDetach?: boolean;
  endPoint?: string;
  anchor?: string;
  anchors?: any[];
  label?: string;
}

export interface DragOptions {
  containment?: string;
}

export interface DropOptions {
  hoverClass?: string;
}

export interface SourceOptions {
  parent: string;
  endpoint?: string;
  anchor?: string;
  connector?: any[];
  connectorStyle?: PaintStyle;
}

export interface TargetOptions {
  isTarget?: boolean;
  maxConnections?: number;
  uniqueEndpoint?: boolean;
  deleteEndpointsOnDetach?: boolean;
  endpoint?: string;
  dropOptions?: DropOptions;
  anchor?: any;
}

export interface SelectParams {
  scope?: string;
  source: string;
  target: string;
}

export interface Connection {
  id: string;
  endpoints: Endpoint[];
  setDetachable(detachable: boolean): void;
  setParameter<T>(name: string, value: T): void;
  getOverlay(s: string): Connection;
  showOverlay(s: string): void;
  hideOverlay(s: string): void;
  setLabel(s: string): void;
  getElement(): Connection;
}

export interface Endpoint {
  anchor?: AnchorObj; // | Array<AnchorObj>;
  endpoint?: Endpoint;
  enabled?: boolean; // = true
  paintStyle?: Object;
  hoverPaintStyle?: Object;
  cssClass?: string;
  hoverClass?: string;
  source: String | Selector | Element;
  container?: String | Selector | Element;
  connections?: Connection[];
  isSource?: boolean; // = false
  maxConnections: number; // = 1?
  dragOptions?: DragOptions;
  connectorStyle?: Object;
  connectorHoverStyle?: Object;
  connector?: string | Object;
  connectorOverlays?: Object;
  connectorClass?: string;
  connectorHoverClass?: string;
  connectionsDetachable?: Boolean; // = true
  isTarget?: boolean; // = false
  dropOptions?: DropOptions;
  reattach?: boolean; // = false
  parameters: Object;
  'connector-pointer-events'?: String;
  connectionType?: String;
  dragProxy?: String | Array<String>;
  id: string;
  scope: string;
  reattachConnections: boolean;
  type: string; // 'Dot', etc.

  addConnection(c: Connection): void;
}

export interface AnchorObj {
  type: Anchor;
  cssClass: string;
  elementId: string;
  id: string;
  locked: boolean;
  offsets: number[];
  orientation: number[];
  x: number;
  y: number;
}

export type Anchor =
  | 'Assign'
  | 'AutoDefault'
  | 'Bottom'
  | 'BottomCenter'
  | 'BottomLeft'
  | 'BottomRight'
  | 'Center'
  | 'Continuous'
  | 'ContinuousBottom'
  | 'ContinuousLeft'
  | 'ContinuousRight'
  | 'ContinuousTop'
  | 'Left'
  | 'LeftMiddle'
  | 'Perimeter'
  | 'Right'
  | 'RightMiddle'
  | 'Top'
  | 'TopCenter'
  | 'TopLeft'
  | 'TopRight';
