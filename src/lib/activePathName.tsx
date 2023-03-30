export default function activePathName(fullPath: string, currentPath: Paths) {
  const path = fullPath.split("/")[1];
  return path === currentPath ? "hidden" : "block";
}
