import { useEffect, useState } from 'react'

type ClientOnlyProps = {
  children: React.ReactNode
}

const ClientOnly = ({ children, ...delegated }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <div {...delegated}>{children}</div>
}

export default ClientOnly
