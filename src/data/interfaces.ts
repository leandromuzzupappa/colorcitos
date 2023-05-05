export interface IRefMesh {
  myRef: React.MutableRefObject<THREE.Mesh | null>;
}

export interface IGeometryProps extends IRefMesh {}
export interface ICustomGeometryProps extends IRefMesh {}
