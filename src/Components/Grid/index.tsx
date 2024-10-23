// src/components/Grid.tsx
import { motion, MotionProps } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
// Type definition for Grid and Grid.Cell components

type GridProps = {
    className?: string;
} & MotionProps;

// Grid component
export const Grid: React.FC<GridProps> = ({ className, ...props }) => {
    return (
        <motion.div
            initial="init"
            animate="enter"
            transition={{ staggerChildren: .07375 }}
            className={twMerge('m-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4', className)}
            {...props}
        />
    );
};

// Grid.Cell component

type GridCellProps = {
    className?: string;
} & MotionProps;

export const Block: React.FC<GridCellProps> = ({ className, ...props }) => {
    return (
        <motion.div
            variants={{
                init: { opacity: 0, scale: 0.85 },
                enter: { opacity: 1, scale: 1, },
                
            }}
            
            className={twMerge(
                'col-span-12 rounded-md border border-zinc-700 bg-zinc-800 p-6 text-zinc-50 md:col-span-4',
                className,
            )}
         
            {...props}
        />
    );
};

// Export Grid component
export default Grid;
