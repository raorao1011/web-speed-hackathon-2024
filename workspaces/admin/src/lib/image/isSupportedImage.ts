const SUPPORTED_MAGIKA_LABEL_LIST = ['bmp', 'jpeg', 'png', 'webp'];
const SUPPORTED_MIME_TYPE_LIST = ['image/bmp', 'image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/jxl'];

export async function isSupportedImage(image: File): Promise<boolean> {
  const extension = image.name.split('.').pop();

  if (SUPPORTED_MAGIKA_LABEL_LIST.includes(extension || '')) {
    return true;
  }

  if (SUPPORTED_MIME_TYPE_LIST.includes(image.type)) {
    return true;
  }

  return false;
}
