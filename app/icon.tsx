import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(45deg, #00FFFF, #FF0080)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
      >
        <div
          style={{
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
          }}
        >
          MR
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 