import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {productsData} from "@/productsData";

export const Tabela = () => {

    type Product = {
        id: number
        name: string
        quantity: number
    }

    const produtos : Product[] = productsData

    return (
        <Table className={'mt-5'}>
            <TableCaption>A list of products.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    produtos.map((product : Product) => (
                    <TableRow key={product.id}>
                        <TableCell className="w-[100px]">{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell className="text-right">{product.quantity}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
    );
};
