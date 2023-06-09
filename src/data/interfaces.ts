export interface IRefMesh {
  myRef: React.MutableRefObject<THREE.Mesh | null>;
}

export interface IGeometryProps extends IRefMesh {}
export interface ICustomGeometryProps extends IRefMesh {}
export interface IBallProps extends IRefMesh {}

export interface IModelProps {
  position?: THREE.Vector3 | number[];
  "position-x"?: number;
  "position-y"?: number;
  "position-z"?: number;
  rotation?: THREE.Euler | number[];
  "rotation-x"?: number;
  "rotation-y"?: number;
  "rotation-z"?: number;
  scale?: THREE.Vector3 | number[];
  "scale-x"?: number;
  "scale-y"?: number;
  "scale-z"?: number;
}
