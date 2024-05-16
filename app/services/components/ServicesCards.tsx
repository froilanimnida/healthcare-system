import Image from 'next/image';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { ServicesData, Services } from '@/app/services/data';
import Link from 'next/link';

interface ServicesProps extends React.HTMLAttributes<HTMLDivElement> {
	services: Services;
	aspectRatio?: 'portrait' | 'square';
	width?: number;
	height?: number;
}

export function ServicesCard({
	services,
	aspectRatio = 'portrait',
	width,
	height,
	className,
	...props
}: ServicesProps) {
	return (
		<div
			className={cn('space-y-3', className)}
			{...props}>
			<ContextMenu>
				<ContextMenuTrigger>
					<div className='overflow-hidden rounded-md'>
						<Image
							src={services.coverImage}
							alt={services.name}
							width={width}
							height={height}
							className={cn(
								'h-auto w-auto object-cover transition-all hover:scale-105',
								aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
							)}
						/>
					</div>
				</ContextMenuTrigger>
				<ContextMenuContent className='w-40'>
					<ContextMenuItem>
						{/* TODO: Add Helpful links here */}
						<Link href='placeholder'>Know More</Link>
					</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
			<div className='space-y-1 text-sm'>
				<h3 className='font-bold text-xl leading-none'>{services.name}</h3>
				<p className='text-sm text-muted-foreground'>
					{services.shortDescription}
				</p>
			</div>
		</div>
	);
}
