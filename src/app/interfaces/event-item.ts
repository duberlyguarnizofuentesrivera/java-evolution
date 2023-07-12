export interface EventItem {
  version: number,       // Version number of Java SDK
  codename?: string,      // Codename of the version if any
  supportStatus: boolean,// Whether it's still supported or not
  releaseDate: Date,    // Release date
  endOfSupportDate?: Date,// End of Support date
  summary: string,       // Quick summary about main changes and improvements in this version
  majorFeatures?: string[], // Major new features introduced in this version
  jepList?: string[],    // List of JEP (JDK Enhancement Proposal) IDs that accomplished in this version
  icon?: string,         // Link to the corresponding version icon
  color?: string,        // Color theme for the version
  downloadUrl?: string   // Link to download the JDK of this version
}
