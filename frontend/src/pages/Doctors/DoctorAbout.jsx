import { formateDate } from "../../utils/formateDate";
const DoctorAbout = () => {
	return (
		<div>
			<div>
				<h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
					About of
				</h3>
				<span className="text-blue-600 font-bold text-[24px] leading-9">
					Muhibur Rahman
				</span>
				<p className="text__para">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Reprehenderit harum quibusdam nobis qui dolorem libero ratione impedit
					culpa modi! Cum eligendi dicta velit maxime sit est unde quaerat?
					Facilis, in?
				</p>
			</div>
			<div className="mt-12">
				<h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
					Education
				</h3>
				<ul className="pt-4 md:p-5">
					<li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
						<div>
							<span className="text-blue-600 text-[15px] leading-6 font-semibold">
								{formateDate("2000-09-13")} - {formateDate("2004-02-03")}
							</span>
							<p className="text-[16px] leading-6 font-medium text-textColor">
								PHD in Surgeon
							</p>
							<p className="text-[16px] leading-6 font-medium text-textColor">
								New Apollo Hospital, New York
							</p>
						</div>
					</li>

					<li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
						<div>
							<span className="text-blue-600 text-[15px] leading-6 font-semibold">
								{formateDate("2010-07-04")} - {formateDate("2015-08-23")}
							</span>
							<p className="text-[16px] leading-6 font-medium text-textColor">
								PHD in Surgeon
							</p>
							<p className="text-[16px] leading-6 font-medium text-textColor">
								New Apollo Hospital, New York
							</p>
						</div>
					</li>
				</ul>
			</div>

			<div className="mt-12">
				<h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
					Experience
				</h3>
				<ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
					<li className="p-4 bg-[#fff9ea]">
						<span className="text-yellow-500 text-[15px] leading-6 font-semibold">
							{formateDate("2000-09-13")} - {formateDate("2004-02-03")}
						</span>
						<p className="text-[16px] leading-6 font-medium text-textColor">
							Sr. Surgeon
						</p>
						<p className="text-[16px] leading-6 font-medium text-textColor">
							New Apollo Hospital, New York
						</p>
					</li>

					<li className="p-4 bg-[#fff9ea]">
						<span className="text-yellow-500 text-[15px] leading-6 font-semibold">
							{formateDate("2000-09-13")} - {formateDate("2004-02-03")}
						</span>
						<p className="text-[16px] leading-6 font-medium text-textColor">
							Sr. Surgeon
						</p>
						<p className="text-[16px] leading-6 font-medium text-textColor">
							New Apollo Hospital, New York
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DoctorAbout;
