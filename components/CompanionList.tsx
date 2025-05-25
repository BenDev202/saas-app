import {
  Table,
  TableBody,
  TableHeader,
  TableCell,
  TableHead,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionListProps {
    title: string;
    companions ?: Companion[];
    className?: string; 
}

const CompanionList = ({ title, companions, className}: CompanionListProps) => {
  return (
    <article className={cn("companion-list", className)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lesson</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

            {companions?.map(({id, subject, name, topic, duration}) => (
                <TableRow>
                    <TableCell key={id}>
                        <Link href={`/companions/${id}`}>
                            <div className="flex items-center gap-2">
                                <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                                    <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35}/>
                                </div>
                            </div>
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
