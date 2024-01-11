import mime from 'mime';
import { Buffer } from 'buffer';

function parseManualUrl(result, path) {
  // Path must be at least "/"
  if(path === undefined || path == "") {
    path = "/";
  }

  // Mime type : by default HTML, but the extension of path can override
  result.contractReturnProcessingOptions.mimeType = 'text/html';
  let matchResult = path.match(/^(?<pathname>[^?]*)([?](?<searchParams>.*))?$/)
  if(matchResult == null) {
    throw new Error("Failed basic parsing of the path");
  }
  let pathname = matchResult.groups.pathname
  let pathnameParts = pathname.split('.')
  if(pathnameParts.length > 1) {
    let specifiedMimeType = mime.getType(pathnameParts[pathnameParts.length - 1])
    if(specifiedMimeType != null) {
      result.contractReturnProcessingOptions.mimeType = specifiedMimeType
    }
  }

  // We are sending the path as calldata
  let callData = "0x" + Buffer.from(path).toString('hex')

  result.contractCallMode = 'calldata'
  result.calldata = callData
}

export { parseManualUrl }
