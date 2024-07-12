import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IWantToKnowMoreDialogProps {
	links: { title: string; url: string }[];
}

const IWantToKnowMoreDialog = ({ links }: IWantToKnowMoreDialogProps) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant={'default'}>I want to know more</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Links to know more about Prenatal</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogDescription className='flex flex-col gap-3'>
					{links.map((link, index) => (
						<Link
							className='flex flex-row gap-3 hover:underline'
							href={link.url}
							key={index}>
							{link.title}
							<LinkIcon className='w-5 h-5' />
						</Link>
					))}
				</AlertDialogDescription>
				<AlertDialogFooter>
					<AlertDialogCancel>Close</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default IWantToKnowMoreDialog;
