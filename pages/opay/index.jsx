// Using the link component to navigate, first we
// need to import the link component

import Link from "next/link"

export default function Dashboard(){
    return (
      <>
        <h1>This is the dashboard page</h1>

        <Link href="/opay/savings">go to saving's page</Link>
        <Link href="/opay/124"> go to the referal's page</Link>

        {/* we dont use regular anchor tag to navigate to a new page because
the page will be refreshed and our stae values will be lost */}
      </>
    );
}