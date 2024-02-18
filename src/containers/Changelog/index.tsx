import BaseLayout from "@/layouts/baseLayout"
import changelogData from "@/services/data/changelog.json"
import { formatDate } from "@/utils/dateUtils"
import React from "react"

interface GroupedChangelog {
    date: string
    items: { label: string; titles: string[] }[]
}

const Changelog: React.FC = () => {
    const mergeSameDateItems = (data: any[]): GroupedChangelog[] => {
        const groupedData: { [key: string]: GroupedChangelog } = {}

        data.forEach((changelog) => {
            const formattedDate = formatDate(changelog.publishDate)
            const key = formattedDate

            if (!groupedData[key]) {
                groupedData[key] = {
                    date: formattedDate,
                    items: []
                }
            }

            const existingLabelIndex = groupedData[key].items.findIndex((item) => item.label === changelog.label)

            if (existingLabelIndex === -1) {
                groupedData[key].items.push({
                    label: changelog.label,
                    titles: [ changelog.title ]
                })
            } else {
                groupedData[key].items[existingLabelIndex].titles.push(changelog.title)
            }
        })

        return Object.values(groupedData)
    }

    const groupedChangelogData = mergeSameDateItems(changelogData)

    return (
        <BaseLayout>
            <div className="mb-12 mt-6 flex flex-col items-center justify-center lg:mb-24 lg:mt-12">
                <div className="mb-6 flex max-w-lg flex-col items-center lg:mb-12">
                    <h1 className="mb-2 text-center text-2xl font-semibold md:text-3xl lg:mb-4 lg:text-4xl">Changelog</h1>
                    <p className="text-center text-sm font-light text-white/75 lg:text-base">Find all new features, improvements, and bugfixes here.</p>
                </div>
                <div className="relative mx-auto flex w-full flex-col items-center justify-center">
                    {groupedChangelogData.map((group: GroupedChangelog, index: number) => (
                        <section key={index} className="w-full max-w-lg justify-center md:flex">
                            <div className="relative w-full pb-16 pl-8 md:pl-12 md:pt-0">
                                <div className="absolute inset-y-0 left-0 w-1 bg-stone-900 md:top-2.5" />
                                <div className="absolute -left-2.5 top-0 size-6 rounded-full border-[3px] border-stone-900 bg-stone-950 md:top-0" />
                                <div className="mb-2 max-w-none text-sm font-medium text-stone-400 md:absolute md:mb-0 md:max-w-48 md:text-base">
                                    {group.date}
                                </div>
                                <div className="mb-6 md:pl-48">
                                    {group.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="mb-3 flex flex-col">
                                            {item.label === "new" && <span className="mb-2 w-fit rounded-xl bg-green-500 px-2 py-1 text-xs font-bold text-green-900">New</span>}
                                            {item.label === "improvement" && <span className="mb-2 w-fit rounded-xl bg-blue-400 px-2 py-1 text-xs font-bold text-blue-950">Improvement</span>}
                                            {item.label === "bugfix" && <span className="mb-2 w-fit rounded-xl bg-red-400 px-2 py-1 text-xs font-bold text-red-950">Bugfix</span>}
                                            <ul>
                                                {item.titles.map((title, titleIndex) => (
                                                    <li key={titleIndex} className="mb-2 text-sm font-medium text-white/85">
                                                        {title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </BaseLayout>
    )
}

export default Changelog