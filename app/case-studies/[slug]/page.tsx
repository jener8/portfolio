import ClientPage from "./client-page"

export async function generateStaticParams() {
  return [
    { slug: "digital-drivers-licence" },
    { slug: "digital-identity-services" },
  ]
}

// Pass generateStaticParams to the server component

// Export the client component as the default export
export default ClientPage

// Ensure dynamic is set to 'force-static' for the server component
export const dynamic = "force-static"
