import React from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';


export const Business = ({ business }) => {
    return (
        <div>
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={business.imageSrc}
                            title={business.name}
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        {business.name}
                    </Typography>
                    <Typography level="body-sm">{`${business.address} ${business.city} ${business.state} ${business.zipCode}`} </Typography>
                </CardContent>
                <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                        <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                            {business.category.toUpperCase()}
                        </Typography>
                        <Divider orientation="vertical" />
                        <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                            {`${business.rating} stars with ${business.reviewCount} reviews`}
                        </Typography>
                    </CardContent>
                </CardOverflow>
            </Card>
        </div>
    );
};