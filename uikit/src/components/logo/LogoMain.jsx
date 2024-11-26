'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
import branding from '@/branding.json';

/***************************  LOGO - MAIN  ***************************/

export default function LogoMain() {
  const theme = useTheme();
  const logoMainPath = branding.logo.main;

  return logoMainPath ? (
    <CardMedia src={logoMainPath} component="img" alt="logo" sx={{ width: { xs: 112, lg: 140 } }} loading="lazy" />
  ) : (
    <Box sx={{ width: { xs: 112, lg: 140 }, height: { xs: 22, lg: 26 } }}>
      <svg viewBox="0 0 140 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8829 0.427107C21.4241 -0.961272 24.4323 1.23978 23.8814 4.08446L20.2026 23.083C20.1771 23.2543 20.1385 23.4244 20.0865 23.5919C19.9716 23.983 19.8053 24.3088 19.5985 24.5713L19.5803 24.5963C18.4651 26.1231 16.3244 26.456 14.7989 25.3398C14.0423 24.7862 13.5792 23.9802 13.4405 23.1221L13.4413 23.1226C13.018 21.5306 13.6228 17.2572 16.7968 10.4168L18.0197 11.7888L19.6391 5.17618C19.7118 4.87928 19.3889 4.64305 19.1283 4.80246L13.3241 8.35306L15.0704 9.15363C11.7777 12.6269 7.19306 15.8763 3.94258 16.2187C3.13058 16.3043 2.15871 16.0911 1.40248 15.5377C-0.123006 14.4215 -0.455588 12.279 0.659645 10.7522L0.66829 10.7404L0.678147 10.7271C0.865156 10.4504 1.1246 10.1932 1.46169 9.96519C1.60563 9.86452 1.75619 9.77586 1.91185 9.69943L18.8829 0.427107ZM6.39334 23.161C7.37266 23.8631 8.73948 23.6318 9.44623 22.6444C9.91583 21.9883 10.2609 19.8511 10.4396 18.4907C10.5082 17.9682 9.98185 17.5908 9.50966 17.8239C8.28019 18.431 6.36939 19.4456 5.8998 20.1017C5.19305 21.0891 5.41402 22.4588 6.39334 23.161Z"
          fill={theme.palette.primary.main}
        />
        {/* <path
          d="M785.04 128.346h-11.5v-79.2h46.92v11.5h-35.42v22.33h28.82v11.55h-28.82Zm67.71 1.6q-6.16 0-10.34-1.98t-6.79-5.2-3.99-7.01q-1.37-3.8-1.87-7.43-.49-3.63-.49-6.38v-33h11.66v29.21q0 3.46.57 7.12.58 3.66 2.2 6.79 1.63 3.14 4.57 5.06 2.94 1.93 7.67 1.93 3.08 0 5.83-1.02t4.81-3.27q2.07-2.26 3.25-5.94 1.18-3.69 1.18-8.97l7.15 2.7q0 8.08-3.02 14.27-3.03 6.19-8.69 9.65-5.67 3.47-13.7 3.47m29.87-1.6h-10.23v-17.16h-1.38v-42.24h11.61Zm68.74 0H939.7v-29.2q0-3.47-.58-7.12-.58-3.66-2.2-6.8-1.62-3.13-4.57-5.06-2.94-1.92-7.67-1.92-3.08 0-5.83 1.02-2.75 1.01-4.81 3.27-2.06 2.25-3.25 5.94-1.18 3.68-1.18 8.96l-7.15-2.69q0-8.09 3.03-14.27 3.02-6.19 8.69-9.66 5.66-3.46 13.69-3.46 6.16 0 10.34 1.98t6.79 5.2q2.62 3.21 3.99 7.01 1.38 3.79 1.87 7.42.5 3.63.5 6.38Zm-41.75 0h-11.66v-59.4h10.29v17.16h1.37Zm111.1 1.65q-11.88 0-20.24-5.19-8.36-5.2-12.79-14.5-4.42-9.29-4.42-21.56 0-12.26 4.42-21.56 4.43-9.29 12.79-14.49t20.24-5.2q13.7 0 22.69 6.93t12.51 18.65l-11.66 3.13q-2.31-8.3-8.22-13.03t-15.32-4.73q-8.41 0-14.02 3.79-5.61 3.8-8.45 10.62-2.83 6.82-2.83 15.89-.05 9.08 2.78 15.9t8.47 10.61q5.64 3.8 14.05 3.8 9.41 0 15.32-4.76t8.22-13.01l11.66 3.14q-3.52 11.71-12.51 18.64t-22.69 6.93m73.1 0q-8.91 0-15.46-4.01-6.54-4.02-10.09-11.08-3.55-7.07-3.55-16.31 0-9.3 3.63-16.36 3.63-7.07 10.18-11 6.54-3.94 15.29-3.94 8.91 0 15.45 4.02 6.55 4.01 10.12 11.05 3.58 7.04 3.58 16.23 0 9.29-3.61 16.36-3.6 7.07-10.14 11.06-6.55 3.98-15.4 3.98m0-10.83q8.52 0 12.73-5.75t4.21-14.82q0-9.3-4.27-14.88-4.26-5.58-12.67-5.58-5.78 0-9.52 2.61t-5.55 7.21q-1.82 4.59-1.82 10.64 0 9.35 4.29 14.96t12.6 5.61m64.85 10.83q-8.3 0-14.33-4.12-6.02-4.13-9.29-11.25t-3.27-16.03q0-8.97 3.3-16.03 3.3-7.07 9.37-11.17 6.08-4.1 14.44-4.1 8.42 0 14.16 4.1 5.75 4.1 8.69 11.19 2.95 7.1 2.95 16.01t-2.97 16q-2.97 7.1-8.75 11.25-5.77 4.15-14.3 4.15m1.6-10.39q5.66 0 9.24-2.7 3.57-2.69 5.22-7.42t1.65-10.89-1.68-10.89q-1.67-4.73-5.17-7.37-3.49-2.64-8.88-2.64-5.72 0-9.4 2.8-3.69 2.81-5.48 7.54-1.78 4.73-1.78 10.56 0 5.88 1.78 10.64 1.79 4.76 5.39 7.56 3.61 2.81 9.11 2.81m26.34 8.74h-10.23v-42.73h-1.32v-36.47h11.55Zm41.74 1.65q-8.86 0-15.54-3.87-6.68-3.88-10.4-10.84-3.71-6.96-3.71-16.14 0-9.74 3.66-16.89t10.2-11.05q6.55-3.91 15.24-3.91 9.07 0 15.45 4.21t9.54 11.96q3.17 7.76 2.51 18.43h-11.5v-4.18q-.11-10.34-3.93-15.29t-11.63-4.95q-8.64 0-12.98 5.44-4.35 5.45-4.35 15.73 0 9.79 4.35 15.16 4.34 5.36 12.54 5.36 5.39 0 9.32-2.45t6.13-7.01l11.28 3.57q-3.47 7.98-10.51 12.35t-15.67 4.37m21.23-28.1h-42.41v-8.97h42.41Z"
          fill={theme.palette.primary.main}
        /> */}
      </svg>
    </Box>
  );
}
