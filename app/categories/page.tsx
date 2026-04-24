import Categories from "@/components/Categories";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const CategoriesPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-start justify-start px-4 md:px-8 py-20 gap-8'>
      <Breadcrumb>
        <BreadcrumbList className='text-sm uppercase tracking-wider'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Strona główna</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Kategorie</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Categories />
    </div>
  );
};

export default CategoriesPage;