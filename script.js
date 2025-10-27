        let html = '';
        const consolar = (indice) => console.log(indice);
        const barWidth = (num) => Math.floor(Math.random()*num);
        const preco = (num) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(num);

        const bars = Array.from({length: 50}).map((bar,index) => `<b class="w-[${barWidth(index)}px]"></b>`).join('')

        fetch('./tickets.json').then(res => res.json()).then(tickets =>{

            tickets.map((ticket,index) =>{ 

                html +=
            `<div class="max-w-[430px] item select-none flex flex-col bg-white rounded-[2rem] py-5 gap-9 [&_>div]:px-7 [corner-shape:squircle] border-2 border-gray-300">
                <div class="company flex relative justify-between pb-6 border-b-2 border-dashed border-gray-300 items-center 
                        before:content-['']
                        before:bg-yellow-300
                        before:absolute
                        before:-left-3
                        before:-bottom-3
                        before:w-6
                        before:h-6
                        before:rounded-full
                        before:border-2 
                        before:border-gray-300
                        before:[clip-path:circle(50%_at_70%_50%)]

                        after:border-gray-300
                        after:[clip-path:circle(50%_at_30%_50%)]
                        after:border-2 
                        after:content-['']
                        after:bg-yellow-300
                        after:absolute
                        after:-right-3
                        after:-bottom-3
                        after:w-6
                        after:h-6
                        after:rounded-full">
                <div class="flex items-center gap-3">
                    <img src="./train.svg" class="inline w-8 bg-yellow-300 p-1.5 rounded-full border border-black">
                    <h1 class="inline-block font-bold">${ticket.company}</h1>
                </div>
                <div class="font-bold">
                    ${preco(ticket.price)}
                </div>
            </div>
    
            <div class="flex justify-between items-center">

                <div class="flex flex-col item-center gap-3 text-center justify-center">
                    <h2 class="font-bold leading-[0] text-2xl">${ticket.from.code}</h2>
                    <sub class="text-xs leading-[.7]">${ticket.from.city}</sub>
                </div>

                <div class="bg-yellow-300 z-1 px-1.5 rounded-full border border-black flex gap-1 items-center h-7 relative [anchor-name:--lines-${index+1}]">
                    <img src="./train.svg" class="inline w-4">
                    <time class="font-bold">${ticket.duration}</time>
                </div>

                <span class="border-dashed border-gray-400 border-1 w-[130px] z-0 [position-anchor:--lines-${index+1}] [position-area:center_center] absolute
                            before:content-['']
                            before:bg-yellow-300
                            before:absolute
                            before:-left-3
                            before:-bottom-1
                            before:w-2
                            before:h-2
                            before:rounded-full
                            
                            after:content-['']
                            after:bg-yellow-300
                            after:absolute
                            after:-right-3
                            after:-bottom-1
                            after:w-2
                            after:h-2
                            after:rounded-full">
                </span>

                <div class="flex flex-col item-center gap-3 text-center justify-center">
                    <h2 class="font-bold leading-[0] text-2xl">${ticket.to.code}</h2>
                    <sub class="text-xs leading-[.7]">${ticket.to.city}</sub>
                </div>
            </div>

            <div class="flex gap-3 items-center justify-between">
                <div class="flex gap-3 items-center">
                    <div>
                        <img src="./bruno.png" class="w-12 h-12 rounded-full border-black border object-cover bg-gray-200">
                    </div>
                    <div>
                        <h2 class="font-bold text-lg leading-[1]">${ticket.passenger.name}</h2>
                        <span class="font-[100] text-sm">${ticket.passenger.email}</span>
                    </div>
                </div>
                <div class="h-8">
                    <sup class="leading-[1.8] block">Seat</sup>
                    <h2 class="leading-[0] font-bold text-xl">${ticket.passenger.seat}</h2>
                </div>
            </div>

            <div class="flex justify-between items-center">
                <div>
                    <sup class="font-[100] block ">Train No</sup>
                    <h2 class="font-bold">${ticket.train_no}</h2>
                </div>
                <div>
                    <sup class="font-[100] block text-right">Class</sup>
                    <h2 class="font-bold">${ticket.class}</h2>
                </div>
            </div>
            
            <div class="flex justify-between items-center">
                <div>
                    <sup class="font-[100] block ">Departure</sup>
                    <time class="font-bold">${ticket.departure}</time>
                </div>
                <div>
                    <sup class="font-[100] block text-right">Arrival</sup>
                    <time class="font-bold">${ticket.arrival}</time>
                </div>
            </div>

            <div class="flex justify-between items-center">
                <div>
                    <sup class="font-[100] block ">Terminal</sup>
                    <h2 class="font-bold">${ticket.terminal}</h2>
                </div>
                <div>
                    <sup class="font-[100] block text-right">Gate</sup>
                    <h2 class="font-bold">${ticket.gate}</h2>
                </div>
            </div>

            <div class="bg-yellow-100 h-23 p-6 saturate-40 border-gray-300 border-b">
                <code class="w-full flex h-full gap-1 [scale:-1_1] [&_b]:bg-black [&_b]:inline-block [&_b]:h-full">
                    ${bars}
                </code>
            </div>

            <div class="flex items-center justify-center font-bold -translate-y-3">
                <button class="cursor-pointer" onclick="consolar('${ticket.passenger.name}')">Download Ticket</button>
            </div>
        </div>`;
        });
        document.querySelector('main').innerHTML = html
    })
