// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Learn, Practice, and
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Master Coding
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Coding Fundamentals Course',
  captionLine: 'Learn programming basics, write clean code, and build confidence through interactive lessons and hands-on projects.',
  primaryBtn: { children: 'Explore Courses', href: SECTION_PATH },
  videoSrc: '/assets/videos/test.mp4',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React 18' },
    { image: '/assets/images/shared/python.svg', title: 'Python' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v6' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/c++.svg', title: 'C++' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
