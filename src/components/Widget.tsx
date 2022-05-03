import React, { useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react';

export function Widget() {

  return (
    <Popover className="absolute bottom-4 right-4">
      <Popover.Panel className="
          w-80
          h-64
          bg-gray-900"
      >
        <div>
          <button
            className="
              p-1
              text-white
            "
          >
            x
          </button>
        </div>
      </Popover.Panel> 
          
      <Popover.Button
        className={`
          px-3 
          h-12
          flex 
          items-center
          text-white
          bg-brand-500 
          rounded-full
          group
        `}
      >
        <ChatTeardropDots size="24"/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>

    </Popover>
  );
}