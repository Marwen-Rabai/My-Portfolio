import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function Icon() {
  const imgBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'MY_Picture.webp'));
  const base64 = `data:image/webp;base64,${imgBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'linear-gradient(45deg, #00FFFF, #FF0080)',
        }}
      >
        <img
          src={base64}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
