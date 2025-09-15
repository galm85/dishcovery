export interface Breadcrumbs{
  current:string;
  links:BreadcrumbsLinks[],
}

export interface BreadcrumbsLinks {
  label:string;
  link:string;
}
