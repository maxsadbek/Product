import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', variant = 'rectangular' }) => {
  const baseClasses = 'animate-pulse bg-gray-100'
  
  const variantClasses = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  )
}

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="aspect-square" variant="rectangular" />
      <Skeleton className="h-4 w-3/4" variant="text" />
      <Skeleton className="h-4 w-1/4" variant="text" />
    </div>
  )
}

export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Skeleton className="aspect-square" variant="rectangular" />
        <div className="flex flex-col gap-6 pt-8">
          <Skeleton className="h-8 w-1/2" variant="text" />
          <Skeleton className="h-6 w-1/4" variant="text" />
          <Skeleton className="h-32 w-full" variant="rectangular" />
          <Skeleton className="h-12 w-1/2" variant="rectangular" />
        </div>
      </div>
    </div>
  )
}

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-200 border-t-[var(--color-accent)] ${sizeClasses[size]} ${className}`} />
  )
}
