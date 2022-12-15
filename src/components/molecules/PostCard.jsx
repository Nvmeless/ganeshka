import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


console.log('postCard')
export function PostCard({ user, title, desc ,...props}) {
  return (
    <Card sx={{ minWidth: 275, textAlign: 'start', margin: '10px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.name_user}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {title}
        </Typography>
        <Typography variant="body2">
            {desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent : 'end' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}