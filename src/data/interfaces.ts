import { GroupProps } from "@react-three/fiber";

export interface IRefMesh {
  myRef: React.MutableRefObject<THREE.Mesh | null>;
}

export interface IGeometryProps extends IRefMesh {}
export interface ICustomGeometryProps extends IRefMesh {}
export interface IBallProps extends IRefMesh {}

export interface IModelProps extends GroupProps {}
