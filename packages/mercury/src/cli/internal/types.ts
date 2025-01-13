export type BundleMetadata = {
  fileDir: string;
  bundleNameWithBackSlash: string;
};

export type BundleAssociationMetadata = {
  bundleName: string;
  fileDir: string;
  transpiledBundle: string;
};

export type FileMetadata = {
  dir: string;
  fileName: string;
  filePath: string;
};

export type CLIArguments = {
  avoidHash: Set<string>;
  globant: boolean;
  iconsPath: string;
  fontFacePath: string;
  outDirPath: string;
};
